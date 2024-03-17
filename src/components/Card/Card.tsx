import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="max-w-xl border rounded-2xl bg-white shadow">
      {children}
    </div>
  );
};

export default Card;
