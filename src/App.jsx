import React, { useState, useEffect } from 'react'
import data from './data.json';
import Item from './ITEMS/Item.jsx';
import Empty from './CART/Empty.jsx';
import Info from './CART/ACTIVATED CART/Info.jsx';


function App() {

  const [imageSource, setImageSource] = useState([window.innerWidth]);
  const changeImgSize = (image) => {
    const width = window.innerWidth;

    if (width >= 1024) {
      return image.desktop;
    } else if (width >= 600 && width < 1024) {
      return image.tablet;
    } else {
      return image.mobile;
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setImageSource(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);  // "listens" when the image is resized

    return () => {
      window.addEventListener('resize', handleResize) // another listener for when the component unmounts 
    }
  }, []) // empty dependency array to only run ONCE


  const [selected, setSelected] = useState([]);


  const handleIncrease = (id) => {
    // console.log(id);
    // registra o id quando o botão quando é clicado

    const foundArr = selected.find(item => item.id === id)
    // acha o item pela id pela condição de ser igual a id que está no json
    // console.log(foundArr); // da undefined pq o array está vazio quando o item é novo
    // foundArr.quantity da errado pq nao tem propriedade ai da undefined
    const { price, name, image } = data.find(item => item.id === id);
    // find no json para pegar o PRICE e o NAME do item isolado



    const currentQuantity = foundArr ? foundArr.quantity : 0;
    // registra a quantidade atual
    // sempre que adicionamos temos duas possibilidades: undefined ou objeto com as quantidades
    // se o resultado for 0, undefined; se não for, pegamos a quantidade, ou seja, checa se ele não está dando undefined
    // console.log(currentQuantity);

    // para alterar o item é simplesmente remove-lo e adiciona-lo novamente ao mesmo array

    const filteredArr = selected.filter(item => item.id !== id)
    // filtra o array para remover o item que estamos tentando adicionar mais quantidade
    // destruir para contruir novamente
    // console.log(filteredArr);
    // aparece um array vazio


    setSelected([...filteredArr, { id, price, name, image, quantity: currentQuantity + 1 }])
    // espalha o array com os itens que sobraram depois de remover o selecionado
    // valor do id é ocultado pq existe uma variavel de mesmo nome com o valor que precisa pegar --> é um "placeholder" para o item selecionado
  }


  const handleDecrease = (id) => {

    const foundArr = selected.find(item => item.id === id);
    const { price, name } = data.find(item => item.id === id);
    const currentQuantity = foundArr ? foundArr.quantity : 0;
    const filteredArr = selected.filter(item => item.id !== id);


    if (currentQuantity - 1 > 0) {
      setSelected([...filteredArr, { id, price, name, quantity: currentQuantity - 1 }]);
    } else {
      setSelected(filteredArr);
    }

    // useEffect(() => {
    //   setSelected(selected => selected.filter(item => item.quantity > 0))
    // }, [filteredArr]);

  }



  const itemQuantity = (id) => {
    const foundArr = selected.find(item => item.id === id);  // acha o item pela id pela condição de ser igual a id que está no json
    const currentQuantity = foundArr ? foundArr.quantity : 0;
    return currentQuantity;
    // fecha a função
  }
  // função para retornar o valor/quantidade do item selecionado



  return (
    <>
      <section className='bg-rose-50 mobile:w-[375px] mobile:h-min mobile:p-[25px]
      desktop:w-[1920px] desktop:h-[1630px] desktop:pt-[70px] desktop:p-0 desktop:flex desktop:flex-row desktop:justify-center
      smallDesk:w-[1500px] smallDesk:h-[1390px] smallDesk:pt-[70px] smallDesk:p-0 smallDesk:flex smallDesk:flex-row smallDesk:justify-center
      tablet:w-[900px] tablet:h-min tablet:pt-[60px] tablet:pl-[70px] tablet:flex tablet:flex-col tablet:justify-center
      '>
        <div id='h1+grid' className='mobile:h-[3480px] desktop:h-[1361px] smallDesk:h-[1361px] tablet:h-[3000px]'>
          <h1 className='text-rose-950 font-bold text-[35px] 
          mobile:mb-[20px]
          desktop:text-[40px] desktop:mb-[30px]
          smallDesk:mb-[30px]
          tablet:mb-[30px]
          '>Desserts</h1>
          <div className='mobile:flex mobile:flex-col mobile:h-[3340px] 
          desktop:grid desktop:grid-cols-3 desktop:grid-rows-3 desktop:h-[1470px] desktop:w-[996px]
          smallDesk:grid smallDesk:grid-cols-3 smallDesk:grid-rows-3 smallDesk:h-[1170px] smallDesk:w-[810px]
          tablet:grid tablet:grid-cols-2 tablet:grid-rows-5 tablet:h-[2800px] tablet:w-[800px]
          '>
            <Item
              data={data}
              changeImgSize={changeImgSize}
              itemQuantity={itemQuantity}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          </div>
        </div>
        <div id='cart' className='mobile:min-h-[270px] mobile:p-[20px] mobile:mb-[30px] mobile:translate-y-0
        desktop:w-[400px] desktop:h-min desktop:pl-[30px] desktop:translate-y-0
        smallDesk:w-[300px] smallDesk:h-min smallDesk:pl-[20px] smallDesk:translate-y-0
        tablet:translate-y-[-100px] tablet:h-min tablet:w-[360px]
        bg-white rounded-[10px] '>
          <h2 className='text-[26px] text-red font-bold mb-[10px]'>Your Cart ({selected.length})</h2>
          {!selected.length > 0 ?
            <Empty /> :
            <Info data={data} selected={selected} setSelected={setSelected} />
          }
        </div>
      </section>
    </>
  )
}

export default App
