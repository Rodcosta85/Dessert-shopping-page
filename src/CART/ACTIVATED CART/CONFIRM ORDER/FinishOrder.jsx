import React from "react";
import PeesFinish from "./PeesFinish.jsx";
import GreenCheck from '../../../assets/symbols/icon-order-confirmed.svg';


const FinishOrder = ({ selected, totalPrice }) => {

   const reloadPage = () => {
      window.location.reload();
      if (window.innerWidth = 375) {
         window.scrollTo({
            top: 0,
            behavior: 'instant', // Adds a smooth scrolling effect
         });
      }
   }

   console.log(selected);



   return (
      <>
         <div className='bg-black-filter fixed z-10 
         mobile:w-[100vw] mobile:h-[6850px] mobile:translate-x-[-45px] mobile:translate-y-[-3300px]
         desktop:w-[100vw] desktop:h-[1630px] desktop:translate-x-[-1290px] desktop:translate-y-[405px]
         smallDesk:w-[100vw] smallDesk:h-[1610px] smallDesk:translate-x-[-1025px] smallDesk:translate-y-[310px]
         tablet:w-[100vw] tablet:h-[3560px] tablet:translate-x-[-90px] tablet:translate-y-[-1520px]
         '></div>
         <div className="bg-white fixed z-20 rounded-[12px] 
         mobile:w-[375px] mobile:min-h-[500px] mobile:translate-x-[-45px] mobile:translate-y-[-3410px] mobile:p-[20px] mobile:pt-[40px]
         desktop:w-[500px] desktop:h-[580px] desktop:overflow-auto desktop:translate-y-[130px] desktop:left-[-550px] desktop:p-[30px] desktop:pt-[40px]
         smallDesk:w-[500px] desksmall:h-[580px] smallDesk:overflow-auto smallDesk:translate-y-[130px] smallDesk:left-[-485px]
         tablet:w-[500px] tablet:h-[580px] tablet:overflow-auto tablet:translate-y-[-2800px] tablet:left-[200px] tablet:pl-[25px]
         ">
            <div>
               <img src={GreenCheck} alt="a green check within a green circle" />
               <h1 className="w-[300px] h-[110px] mt-5 leading-[50px] text-rose-950 text-[40px] font-bold">Order Confirmed</h1>
               <p className="text-dark-pink">We hope you enjoy your food!</p>
            </div>
            <div className="bg-rose-50 rounded-[12px] mt-9 p-5 pt-3 flex flex-col justify-center">
               {selected.map((item) => (
                  <>
                  {console.log(item.image)}
                     <div id='item' className='flex flex-row items-center h-20 mt-1 mb-2' key={item.id}>
                        <img src={item.image.thumbnail} alt={item.alt} className="rounded-[12px] w-[70px] h-[70px] mt-3 mb-2 ml-1 mr-4" />
                        <div className='w-[270px] tablet:w-[300px] flex flex-col'>
                           <PeesFinish item={item} />
                        </div>
                        <p className='text-[18px] desktop:text-right text-rose-950 font-medium'>${item.price * item.quantity}</p>
                     </div>
                     <div className="bg-gray-300 mobile:w-[295px] desktop:w-[400px] tablet:w-[415px] h-[0.3px]"></div>
                  </>

               ))}
               <div className="flex flex-row justify-between items-center mt-5">
                  <p className="text-rose-950">Order Total</p>
                  <h2 className="text-[30px] font-bold">${totalPrice}</h2>
               </div>
            </div>
            <div className="flex justify-center mt-5 mb-3">
               <button onClick={reloadPage} className="w-[440px] h-[50px] rounded-[35px] bg-red hover:bg-hover-red text-white font-semibold">Start New Order</button>
            </div>
         </div>
      </>

   )
}

export default FinishOrder;