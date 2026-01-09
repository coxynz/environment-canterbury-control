import React from 'react';
import { LucideProps } from 'lucide-react';

interface IconWrapperProps extends LucideProps {
  icon: React.ComponentType<LucideProps>;
}

export const Icon: React.FC<IconWrapperProps> = ({ icon: IconComponent, className, ...props }) => {
  return <IconComponent className={className} {...props} />;
};