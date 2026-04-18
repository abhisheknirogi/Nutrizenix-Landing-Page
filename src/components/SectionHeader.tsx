import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ label, title, subtitle, className = 'text-center' }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="text-nzx-gold font-semibold tracking-widest text-xs uppercase mb-2">
        {label}
      </div>
      <h2 className="font-heading text-3xl md:text-4xl text-nzx-dark">{title}</h2>
      {subtitle && (
        <p className="font-body text-nzx-mid mt-3 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
