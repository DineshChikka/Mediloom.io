const Dashboard2 = () => {
    return (
      <div className="w-full h-screen">
        <iframe
          src="http://localhost:3000/d/eeixaf3duksn4d/hospital-administration-dashboard?orgId=1&from=2024-12-31T18:30:00.000Z&to=2025-04-15T18:29:59.000Z&timezone=browser&var-hospital=$__all&var-city=$__all&var-gender=$__all&var-doctor=$__all&var-visit_type=$__all&var-resources_type=$__all"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Grafana Dashboard"
          style={{ border: 'none' }}
        />
      </div>
    );
  };
  
  export default Dashboard2;