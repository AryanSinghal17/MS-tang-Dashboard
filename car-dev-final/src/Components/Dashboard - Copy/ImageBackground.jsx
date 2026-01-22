import React from 'react';

const ImageBackground = () => {
  const styles = {
    container: {
      width: '100%',
      height: '350px',
      // Replace with your actual Mustang image URL
      backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0), rgba(15, 15, 15, 1)), url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '12px',
      position: 'relative',
      marginBottom: '2rem',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '2rem'
    },
    text: {
      zIndex: 2,
    },
    title: {
      fontSize: '3rem',
      margin: 0,
      textTransform: 'uppercase',
      fontStyle: 'italic'
    },
    subtitle: {
      color: '#E60012',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      letterSpacing: '2px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <div style={styles.subtitle}>GT PERFORMANCE</div>
        <h1 style={styles.title}>MUSTANG <span style={{color: '#E60012'}}>DARK HORSE</span></h1>
      </div>
    </div>
  );
};

export default ImageBackground;