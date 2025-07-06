import React, { useState, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  placeholder = '/placeholder.svg',
  onLoad
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={hasError ? placeholder : src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ImageOptimizer; 