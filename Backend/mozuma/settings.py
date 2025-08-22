"""
Django settings for mozuma project.

Reads configuration from Backend/.env (or a .env found in parent folders) and uses
dj-database-url to parse DATABASE_URL. Falls back to SQLite for local dev.
Uses PyMySQL as the MySQLdb adapter for Railway.
"""

import os
from pathlib import Path
from dotenv import load_dotenv, find_dotenv
import dj_database_url
import pymysql
from django.core.exceptions import ImproperlyConfigured

# Use PyMySQL as MySQLdb wrapper (needed if using pymysql)
pymysql.install_as_MySQLdb()

# BASE_DIR: project root where manage.py lives
BASE_DIR = Path(__file__).resolve().parent.parent

# Load environment variables:
# Prefer Backend/.env next to manage.py, otherwise fall back to any .env found.
_env_path = BASE_DIR / ".env"
if _env_path.exists():
    load_dotenv(dotenv_path=_env_path)
else:
    # find_dotenv will search upward from cwd for a .env file
    load_dotenv(find_dotenv())

# SECURITY
SECRET_KEY = os.getenv("SECRET_KEY", "unsafe-secret-key-for-local-dev")
DEBUG = os.getenv("DEBUG", "False").lower() in ("1", "true", "yes")

# STRIPE keys (make sure Backend/.env has STRIPE_SECRET_KEY=sk_test_...)
STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY", "")
STRIPE_PUBLISHABLE_KEY = os.getenv("STRIPE_PUBLISHABLE_KEY", "")

# Optionally fail fast in production if STRIPE_SECRET_KEY missing:
# if not DEBUG and not STRIPE_SECRET_KEY:
#     raise ImproperlyConfigured("STRIPE_SECRET_KEY is required in production")

# ALLOWED_HOSTS: comma-separated env var -> list
_allowed = os.getenv(
    "ALLOWED_HOSTS",
    "localhost,127.0.0.1,mozuma-oceanfront-suites-beyin-production.up.railway.app",
)
ALLOWED_HOSTS = [h.strip() for h in _allowed.split(",") if h.strip()]

# Application definition
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # Third-party apps
    "rest_framework",
    "rest_framework.authtoken",
    "corsheaders",
    # Local apps
    "core",
]

AUTH_USER_MODEL = "core.CustomUser"

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
}

from datetime import timedelta

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
}

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",  # should be high in the list
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "mozuma.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "mozuma.wsgi.application"

# DATABASES: parse DATABASE_URL if present (Railway), otherwise fallback to sqlite
DATABASES = {
    "default": dj_database_url.config(
        default=os.environ.get("DATABASE_URL", f"sqlite:///{BASE_DIR / 'db.sqlite3'}"),
        conn_max_age=600,
        ssl_require=False,
    )
}

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# CORS settings
# Add localhost:3000 for React local dev; adjust/remove for production
CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://mozuma-oceanfront-suites-beyin.vercel.app",
    "https://mozuma-oceanfront-suites-beyin-production.up.railway.app",
]
CORS_ALLOW_CREDENTIALS = True

# CSRF trusted origins for production domains
CSRF_TRUSTED_ORIGINS = [
    "https://mozuma-oceanfront-suites-beyin-production.up.railway.app",
    "https://*.railway.app",
]

# Internationalization
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

# When serving a built React app through Django, optionally:
# STATICFILES_DIRS = [ BASE_DIR / "Frontend" / "build" / "static" ]

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Optional: quick debug print if you want to verify at startup (comment out later)
# if DEBUG:
#     print("Loaded .env from:", _env_path if _env_path.exists() else "find_dotenv()")
#     print("STRIPE_SECRET_KEY present:", bool(STRIPE_SECRET_KEY))
#     print("DATABASES:", DATABASES)
