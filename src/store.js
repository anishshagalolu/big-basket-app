import { configureStore, createSlice } from "@reduxjs/toolkit";

const savedCart=localStorage.getItem("cart");
const localStorageCart=savedCart ? JSON.parse(savedCart):[];

const productSlice=createSlice({
name:'products',
initialState:{
    veg:[
        {name:'Tomato',price:200.45,image:'/images/tomato.jpg'},
        {name:'Carrot',price:100.55,image:"/images/carrot.jpg"},
        {name:'Broccoli',price:150.55,image:"/images/broccoli.jpg"},
        {name:'Cabbage',price:200.55,image:"/images/cabbage.jpg"},
        {name:'Brinjal',price:250.55,image:"/images/eggplant.jpg"},
        {name:'CauliFlower',price:50.55,image:"/images/cauliflower.jpg"},
        {name:'Chilli',price:30.55,image:"/images/chilli.jpg"},
        {name:'Potato',price:100.55,image:"/images/potato.jpg"},
        {name:'LadyFinger',price:90.55,image:"/images/lady.jpg"},
        {name:'Onion',price:190.55,image:"/images/onion.jpg"}

    ],
    nonveg:[
        {name:'Chicken',price:1000.45,image:"/images/chicken.jpg"},
        {name:'Mutton',price:1200.45,image:"/images/mutton.jpg"},
        {name:'Egg',price:800.45,image:"/images/egg.jpg"},
        {name:'Crab',price:850.45,image:"/images/crab.jpg"},
        {name:'pork',price:2000.45,image:"/images/pork.jpg"},
        {name:'Turkey',price:1800.45,image:"/images/turkey.jpg"},
        {name:'Oyster',price:1200.45,image:"/images/oyster.jpg"},
        {name:'Fish',price:700.45,image:"/images/fish.jpg"},
        {name:'Prawn',price:500.45,image:"/images/prawn.jpg"},
        {name:'Snail',price:2200.45,image:"/images/snail.jpg"}

        
    ],
    chocolate:[
        {name:'5 Star',price:50.45,image:"/images/5star.jpg"},
        {name:'Dairy Milk',price:10.45,image:"/images/dairymilk.jpg"},
        {name:'Ferrero Rocher',price:100.45,image:"/images/ferrero.jpeg"},
        {name:'Tim Tam',price:150.45,image:"/images/tim.jpg"},
        {name:'Kisses',price:250.45,image:"/images/kisses.jpg"},
        {name:'Alpelibe',price:90.45,image:"/images/alp.jpeg"},
        {name:'Eclairs',price:120.45,image:"/images/eclair.jpeg"},
        {name:'KitKat',price:200.45,image:"/images/kit.jpeg"},
        {name:'Kinder Joy',price:45.45,image:"/images/kinder.jpeg"},
        {name:'Toblerrone',price:59.45,image:"/images/tob.jpg"},
    ],
    milk:[
        {name:'Cheese',price:50.45,image:"/images/cheese.jpg"},
        {name:'Milk',price:20.45,image:"/images/milk.jpg"},
        {name:'Ghee',price:30.45,image:"/images/ghee.jpeg"},
        {name:'Butter',price:35.45,image:"/images/butter.jpg"},
        {name:'Cream',price:70.45,image:"/images/Cream.jpeg"},
        {name:'Curd',price:60.45,image:"/images/curd.jpeg"},
        {name:'Lassi',price:80.45,image:"/images/lassi.jpeg"},
        {name:'Milk Maid',price:120.45,image:"/images/milkm.jpeg"},
        {name:'Butter Milk',price:82.45,image:"/images/butterm.jpeg"},
        {name:'Paneer', price:75.20,image:"public/images/paneer2.jpg"},

    ]
},
reducers:{}
});
let cartSlice=createSlice({
    name:'cart',
    initialState:localStorageCart,
    reducers:{
        AddToCart:((state,inputItem)=>{
        let item =state.find(item=>item.name===inputItem.payload.name);
        
        if(item)
        {
           item.quantity+=1;
        }
        else
        {
            state.push({...inputItem.payload,quantity:1});
        }
    }

        ),
    
      IncCart: ((state, inputItem) => {
        const item = state.find(item => item.name === inputItem.payload.name);
        if (item) {
          item.quantity += 1;
        }
    
      }
    ),
    Remove:((state,inputItem)=>{
        return state.filter(i=>i.name !==inputItem.payload.name)
        
    }
),
DecCart:((state,inputItem)=>{
    const item=state.find(item=>item.name===inputItem.payload.name)
    if(item.quantity>=2)
    {
        item.quantity-=1;
    }
    else
    {
        return state.filter(i=>i.name !==inputItem.payload.name)
    }
}),
  RemoveCart:()=>[],
  


    }

  });
  let orderSlice=createSlice({
    name:'orders',
    initialState:[],
    reducers:{
        orderDetails:((state,actions)=>{
           state.push(actions.payload)
        }

  )}
  })
  let userSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        isAuthenticated:false,
        currentUser:null,
    },
    reducers:{
        registerUser:(state,action)=>{
            state.users.push(action.payload);
        },
        loginUser:(state,inputData)=>{
            const foundUser=state.users.find(user=>user.username===inputData.payload.username &&
                user.password===inputData.payload.password
            );
            if(foundUser){
                state.isAuthenticated=true;
                state.currentUser=foundUser;
            }
            else{
                alert('Invalid Credential');
            }
            
        },
        logOut:(state)=>{
            state.isAuthenticated=false;
            state.currentUser=null
        }
    }
  })
    export let{AddToCart,IncCart,Remove,DecCart,RemoveCart}=cartSlice.actions
    export let{orderDetails}=orderSlice.actions
    export let{registerUser,loginUser,logOut}=userSlice.actions

const store=configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer,
        orders:orderSlice.reducer,
        users:userSlice.reducer
    }
});
store.subscribe(()=>{
    const state=store.getState();
    localStorage.setItem("cart",JSON.stringify(state.cart));
})
export default store;
