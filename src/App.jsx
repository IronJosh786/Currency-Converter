import { useState } from 'react';
import Input from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  const currencyInfo = useCurrencyInfo(from);
  const optionsOfCurrency = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <>
      <div className='max-w-[60ch] mx-auto border-2 border-white p-2 rounded-md mt-20'>
        <h1 className='text-center text-3xl mb-8'>Currency Converter</h1>
        <Input 
          label="From" 
          selectedCurrency={from}
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          options={optionsOfCurrency}
          onCurrencyChange={(from) => setFrom(from)}
        />
        <Input 
          label="To" 
          selectedCurrency={to}
          amount={convertedAmount}
          options={optionsOfCurrency}
          onCurrencyChange={(to) => setTo(to)}
          amountDisabled
          addOnClasses='mt-5'
        />
        <div className="flex flex-col items-center justify-between max-w-[60ch] m-auto md:flex-row">
          <button 
            onClick={swap}
            className='ease-in-out duration-200 p-1 border-2 border-white mt-4 w-full rounded-md md:rounded-l-md md:rounded-r-none md:w-1/2 hover:bg-white hover:text-[#212121]'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>
          </button>
          <button 
            onClick={convert}
            className='ease-in-out duration-200 p-1 border-2 border-white mt-4 w-full rounded-md md:rounded-r-md md:rounded-l-none md:w-1/2 hover:bg-white hover:text-[#212121]'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
