const Price = () => {
  return (
    <div>
      <ul className="flex flex-col space-y-2">
        <div>
          <h3 className="text-lg">Preço</h3>
          <li className="bg-[#3CD3C1] h-1 w-6" />
        </div>
        <div className="text-sm space-y-2">
          <li className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />
            <label>De R$0,00 a R$50,00</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />

            <label>Abaixo de R$100</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />

            <label>Abaixo de R$150</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />

            <label>Abaixo de R$200</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />

            <label>Gratuito</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />

            <label>Com desconto</label>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Price;
