import React from 'react';

interface SenhaInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SenhaInput: React.FC<SenhaInputProps> = ({ value, onChange }) => {
  return (
    <div className="form-group flex flex-row border-[2px] p-2 rounded-2xl shadow-md">
      <div className='ml-1 w-[15%] h-full flex mb-1.5 justify-center'>
        <img src="/lock.png" alt="email icon" className='w-6 h-6' />
      </div>
      <input
        type="password"
        id="senha"
        name="senha"
        onChange={onChange}
        placeholder="Senha"
        className="ml-2 block w-full font-inter text-sm pr-3 focus:outline-none"
      />
    </div>
  );
};

export default SenhaInput;