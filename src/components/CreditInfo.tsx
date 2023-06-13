import { useState, ChangeEvent } from 'react';
import Atropos from 'atropos/react';

function FormCC() {
  const [creditName, setCreditName] = useState<string>('');
  const [creditNumber, setCreditNumber] = useState<string>('');
  const [creditDate, setCreditDate] = useState<string>('');
  const [creditCVV, setCreditCVV] = useState<string>('');

  function getFormattedValue(e: ChangeEvent<HTMLInputElement>) {
    setCreditNumber(e.target.value);
    const cardNumber = creditNumber;
    let formattedCard = cardNumber.replace(/[^\d]/g, "");
    formattedCard = formattedCard.substring(0, 16);


       // Split the card number is groups of 4
       const cardNumberSections = formattedCard.match(/\d{1,4}/g);
       if (cardNumberSections !== null) {
           formattedCard = cardNumberSections.join(' ');	
       }     
       // If the formmattedCardNumber is different to what is shown, change the value
       if (cardNumber !== formattedCard) {
        setCreditNumber(formattedCard);
       }


  }

  return (
    <div className='flex gap-x-12 bg-white items-center py-10 px-7 border border-slate-100 rounded-lg mt-20'>
      <section className='w-1/2'>
        <h1 className='text-3xl font-bold text-slate-700 text-left mb-2'>Final Step, Make the Payment</h1>
        <p className='text-xl font-light text-slate-400 text-left mb-10'>To finalize your subscription, kindly complete your payment using a valid credit card.</p>
        <form className='flex flex-col gap-y-6'>
          <div className='flex flex-col text-left gap-y-2'>
            <label className='font-semibold text-slate-600' htmlFor='creditName'>Card Name</label>
            <input className='bg-slate-100 px-4 border border-slate-100 h-12 rounded-md uppercase' id='creditName' value={creditName} type='text' onChange={(nameCard) => setCreditName(nameCard.target.value)} />
          </div>
          <div className='flex flex-col text-left gap-y-2'>
            <label className='font-semibold text-slate-600' htmlFor='creditNum'>Card Number</label>
            <input className='bg-slate-100 px-4 border border-slate-100 h-12 rounded-md' id='creditNum' value={creditNumber} type='text' pattern='[0-9/s]{13,19}' placeholder='X X X X - X X X X - X X X X - X X X X' onChange={getFormattedValue} />
          </div>
          <div className='flex flex-row text-left gap-x-9'>
            <div className='flex flex-col gap-y-2 w-full'>
              <label className='font-semibold text-slate-600' htmlFor='creditDate'>Expiry Date</label>
              <input className='bg-slate-100 px-4 border border-slate-100 h-12 rounded-md' id='creditDate' value={creditDate} type='text' pattern='mm/yy' onChange={(date) => setCreditDate(date.target.value)} />
            </div>
            <div className='flex flex-col gap-y-2 w-full'>
              <label className='font-semibold text-slate-600' htmlFor='creditCVV'>CVV</label>
              <input className='bg-slate-100 px-4 border border-slate-100 h-12 rounded-md' pattern='000' id='creditCVV' value={creditCVV} type='password' onChange={(cvv) => setCreditCVV(cvv.target.value)} />
            </div>
          </div>
        </form>
      </section>
      <figure className='w-2/3 h-[500px] backgroundCard backdrop-blur-lg flex justify-center place-items-center rounded-lg'>
        {/* Card Style */}
        <Atropos className='my-atropos rounded-lg'>
          <div className='backdrop-blur-md bg-black w-96 h-56 rounded-lg flex px-4 py-4 flex-col justify-between'>
            <div className='flex justify-end'>
              <img width={40} height={10} src='./src/VisaWhite.svg' alt='logo de Visa Credit Card' />
            </div>
            <section className='text-left flex flex-col gap-y-5'>
              <img width='70' height='20' src='https://img.icons8.com/plasticine/100/sim-card-chip.png' alt='sim-card-chip' />
              <div>
                <p className='text-white text-2xl uppercase tracking-widest mb-4'>{creditNumber}</p>
                <div className='text-left flex justify-between items-end'>
                  <div>
                    <p className='text-white text-xs uppercase tracking-widest'>CARD HOLDER</p>
                    <p className='text-white text-lg uppercase tracking-wide font-semibold'>{creditName}</p>
                  </div>
                  <p className='text-white text-lg uppercase tracking-wide font-semibold'>{creditDate}</p>
                </div>
              </div>
            </section>
          </div>
        </Atropos>
      </figure>
    </div>
  );
}

export default FormCC;
