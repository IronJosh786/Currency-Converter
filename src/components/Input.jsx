import { useState } from "react"

export default function Input({
    label,
    amount,
    onAmountChange,
    selectedCurrency,
    onCurrencyChange,
    amountDisabled,
    options = [],
    addOnClasses = ""
}) {
    
    return(
        <>
            <div className={`flex justify-between items-center ${addOnClasses}`}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="amount">{label}</label>
                    <input 
                        id="amount" 
                        type="number" 
                        min={0}
                        value={amount}
                        onChange={(e) => onAmountChange(e.target.value)}
                        disabled={amountDisabled}
                        className="text-[#212121] text-md p-1 mt-1 max-w-36 bg-white rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="currency">Currency Type</label>
                    <select 
                        id="currency" 
                        name="currency" 
                        value={selectedCurrency} 
                        onChange={(e) => onCurrencyChange(e.target.value)}
                        className="text-[#212121] text-md p-1 mt-1 rounded-md"
                    >
                        {options.map((currency) => (
                            <option 
                                key={currency} 
                                value={currency}
                            >
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}
