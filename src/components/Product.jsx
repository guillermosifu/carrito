
const{id,name,mainCategory,secondaryCategory,price,image}=productos;

const  addProductCart=(id) =>{
    const productos={
        id:id,
        name: name,
        mainCategory : mainCategory,
        secondaryCategory: secondaryCategory,
        price:price,
        image:image
    };
    const existProduct= cart.filter((productos)=>{
        return productos.id === id;
    });

    if (existProduct[0]){
        Swal.fire({
            position:"center",
            title: "el producto ya fue seleccionado",
            text:"Elije otro producto",
            icon: "warning",
            confirmButtonText: "aceptar",
            timer:4000
        });
    }else{
        addProduct([
            ...cart,
            product
        ])
    }
}

const deleteProduct =()=>{
    const swalWithBoostrapButtons = Swal.mixin({
        customClass :{
            confirmButton : 'btn btn-success',
            cancelButton : 'btn btn-danger'
        },
        buttonStyling:false
    })
}