import React, { useState, useEffect } from 'react';
import { getHello, getProfile, API_URL } from './api';

// Test component to verify API integration works
// This is for testing purposes - you can remove this component once integration is verified
const ApiTest = () => {
  const [hello, setHello] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const testHello = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getHello();
      setHello(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const testProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getProfile('test-token');
      setProfile(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Auto-test the hello endpoint on component mount
    testHello();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h3>API Integration Test</h3>
      <p><strong>API URL:</strong> {API_URL}</p>
      
      <div style={{ marginBottom: '10px' }}>
        <button onClick={testHello} disabled={loading}>
          Test Hello API
        </button>
        <button onClick={testProfile} disabled={loading} style={{ marginLeft: '10px' }}>
          Test Profile API
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {hello && (
        <div>
          <h4>Hello Response:</h4>
          <pre>{JSON.stringify(hello, null, 2)}</pre>
        </div>
      )}
      
      {profile && (
        <div>
          <h4>Profile Response:</h4>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiTest;