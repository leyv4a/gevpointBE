

const formatText = (text) => {
   text = text.toLowerCase();
   text = text[0].toLocaleUpperCase() + text.slice(1);
   return text;
}

const formatCode = (code) => {
    //Hace mayuscula la primer letra y la recupera en la constante
    const firstLetter = code.charAt(0).toUpperCase();
    const remainingCode = code.slice(1);
    const firstThreeNumbers = remainingCode.substring(0, 3);

    return firstLetter + firstThreeNumbers
}

const codeLenght = (code)=>{
    if (code.length == 4) {
        return true;
    }else{
        return false;
    }
}

const formatQuantity = (quantity)=>{
    return quantity.toFixed(0);
}

const formatPrice = (price)=>{
    return price.toFixed(2);
}



export {formatText, formatCode, codeLenght, formatQuantity, formatPrice};