
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL ,  -- Store hashed passwords
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE suites (
    suite_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price_per_night DECIMAL(10, 2) NOT NULL,
    capacity INT NOT NULL,
    availability BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    suite_id INT NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (suite_id) REFERENCES suites(suite_id)
);

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    status ENUM('payment not success', 'pending', 'payment successful') DEFAULT 'pending',
    transaction_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);

CREATE TABLE reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    suite_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (suite_id) REFERENCES suites(suite_id)
);


-- FOR TESTING 
INSERT INTO users (first_name, last_name, email, password, phone_number)
VALUES ('Yusif', 'Ibrahim', 'yusiff@example.com', 'hashedpassword123', '0551234567');

INSERT INTO suites (name, description, price_per_night, capacity)
VALUES ('Ocean View', 'A room with an ocean view.', 250.00, 2);

INSERT INTO bookings (user_id, suite_id, check_in_date, check_out_date, total_price)
VALUES (1, 1, '2025-07-01', '2025-07-05', 1000.00);

INSERT INTO payments (booking_id, amount, payment_method, status, transaction_id)
VALUES (1, 1000.00, 'MTN MoMo', 'payment successful', 'TXN123456789');

INSERT INTO reviews (user_id, suite_id, rating, comment)
VALUES (1, 1, 5, 'Amazing view and great service!');


SELECT * FROM users;
SELECT * FROM suites;
SELECT * FROM bookings;
SELECT * FROM payments;
SELECT * FROM reviews;
