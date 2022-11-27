
const debounce = (func, timeout=3000) => {

    let timer ;
    return (...args) => {
        clearTimeout(timer);
       timer =   setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}


const saveInput = (name) => {
    console.log("saveInput", name);
}

const processChange = debounce(saveInput, 2000);