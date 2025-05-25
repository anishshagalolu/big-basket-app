import { configureStore, createSlice } from "@reduxjs/toolkit";

const savedCart=localStorage.getItem("cart");
const localStorageCart=savedCart ? JSON.parse(savedCart):[];

const productSlice=createSlice({
name:'products',
initialState:{
    veg:[
        {name:'Tomato',price:200.45,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGS-KEh6jLwDYjkPKs4KKi2NAqTT-ew2RdtA&s'},
        {name:'Carrot',price:100.55,image:"https://m.media-amazon.com/images/I/71S6oQqVa5L._AC_UF1000,1000_QL80_.jpg"},
        {name:'Broccoli',price:150.55,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmsTqc4RhMDFWD3kmkwhJX-zzKAAx-mdnjw&s"},
        {name:'Cabbage',price:200.55,image:"https://www.veggovilla.com/img/productimg/cabbage_0_5-240.webp"},
        {name:'Brinjal',price:250.55,image:"https://organicmandya.com/cdn/shop/files/Brinjal.jpg?v=1721370805&width=1000"},
        {name:'CauliFlower',price:50.55,image:"https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg"},
        {name:'Chilli',price:30.55,image:"https://organicmandya.com/cdn/shop/files/GreenChilli.jpg?v=1721374815&width=1000"},
        {name:'Potato',price:100.55,image:"https://m.media-amazon.com/images/I/41QKCkQ2A5L.jpg"},
        {name:'LadyFinger',price:90.55,image:"https://m.media-amazon.com/images/I/61M7ZbTTlVL._AC_UF1000,1000_QL80_.jpg"},
        {name:'Onion',price:190.55,image:"https://m.media-amazon.com/images/I/51DJ-9xkuQL.jpg"}

    ],
    nonveg:[
        {name:'Chicken',price:1000.45,image:"https://assets.tendercuts.in/product/C/H/594e4559-f6b7-417d-9aac-d0643b5711d3.jpg"},
        {name:'Mutton',price:1200.45,image:"https://assets.tendercuts.in/product/G/T/58b1c842-23af-4152-a769-a7ce46702a9c.jpg"},
        {name:'Egg',price:800.45,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXU_jAPEw8dFXqocd7iSgYLIilcFcIm_Hx5A&s"},
        {name:'Crab',price:850.45,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0TtSpA_Pqjd-925phdoxddwjHTjECRGnKQ&s"},
        {name:'pork',price:2000.45,image:"https://2.wlimg.com/product_images/bc-full/2022/3/5302707/raw-pork-cream-chop-1648031077-5732522.jpeg"},
        {name:'Turkey',price:1800.45,image:"https://sweetstuff.in/wp-content/uploads/2022/12/image-25.png"},
        {name:'Oyster',price:1200.45,image:"https://hips.hearstapps.com/hmg-prod/images/raw-oyster-platter-royalty-free-image-1628797063.jpg"},
        {name:'Fish',price:700.45,image:"https://img.freepik.com/premium-photo/raw-tilapia-fish-fillet-meat-cuts-white-background-top-view_249006-12927.jpg"},
        {name:'Prawn',price:500.45,image:"https://images-prod.healthline.com/hlcmsresource/images/AN_images/can-you-eat-raw-shrimp-1296x728-feature.jpg"},
        {name:'Snail',price:2200.45,image:"https://cbx-prod.b-cdn.net/COLOURBOX36616904.jpg?width=800&height=800&quality=70"}

        
    ],
    chocolate:[
        {name:'5 Star',price:50.45,image:"https://m.media-amazon.com/images/I/618fySthK8L.jpg"},
        {name:'Dairy Milk',price:10.45,image:"https://img.clevup.in/333751/cadbury-dairy-milk-chocolate-10-extra-25-3gm-500x500-1715052383958.jpeg?width=600&format=webp"},
        {name:'Ferrero Rocher',price:100.45,image:"https://images-cdn.ubuy.co.in/639292af352c72631c35afbf-chocolate-candy-gold-wrap-ferrero.jpg"},
        {name:'Tim Tam',price:150.45,image:"https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM1ZWZmODkxOWYwOTIwYjAwMTMyOWMzLXRpbS10YW0tZGVsdXhlLWRlY2FkZW50LXRyaXBsZS1jaG9jLmpwZw.jpg"},
        {name:'Kisses',price:250.45,image:"https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-01-25/Hersheys_Kisses_Milk_Chocolates_100.8g_.jpg"},
        {name:'Alpelibe',price:90.45,image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/images/products/sliding_image/216545a.jpg?ts=1683807626"},
        {name:'Eclairs',price:120.45,image:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/99113b38b8698e6901357eebaa4c733e"},
        {name:'KitKat',price:200.45,image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/b/b/8/260-kitkat-chocolate-pack-2-nestle-original-imagntz9gyhzejyr.jpeg?q=90&crop=false"},
        {name:'Kinder Joy',price:45.45,image:"https://ik.imagekit.io/wlfr/wellness/images/products/333072-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end"},
        {name:'Toblerrone',price:59.45,image:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Toblerone_3362.jpg"},
    ],
    milk:[
        {name:'Cheese',price:50.45,image:"https://m.media-amazon.com/images/I/71JIA49IdYL.jpg"},
        {name:'Milk',price:20.45,image:"https://fattaak.in/cdn/shop/files/1_6565d8f5-7cf3-483a-9aad-51e483d95845.jpg?v=1737357846"},
        {name:'Ghee',price:30.45,image:"https://static.wixstatic.com/media/6116de_ab3392b8596c462fb92cbd2c4f37bb07~mv2.jpg/v1/fill/w_336,h_235,al_c,lg_1,q_80,enc_avif,quality_auto/6116de_ab3392b8596c462fb92cbd2c4f37bb07~mv2.jpg"},
        {name:'Butter',price:35.45,image:"https://m.media-amazon.com/images/S/aplus-media/sota/95d868ed-6acd-4efc-990f-ee892ff3118d.__CR0,0,970,600_PT0_SX970_V1___.jpg"},
        {name:'Cream',price:70.45,image:"https://www.bigbasket.com/media/uploads/p/xxl/40102603_3-amul-fresh-cream-25-milk-fat-low-fat.jpg"},
        {name:'Curd',price:60.45,image:"https://cdn.zeptonow.com/production/tr:w-640,ar-980-980,pr-true,f-auto,q-80/cms/product_variant/ff50e2d2-cc80-408e-8267-3c423cf2dca2.jpeg"},
        {name:'Lassi',price:80.45,image:"https://m.media-amazon.com/images/I/61eR0YUpeoL.jpg"},
        {name:'Milk Maid',price:120.45,image:"https://img.cdnx.in/36037/1621948693996_SKU-0085_0.jpg?width=600&format=webp"},
        {name:'Butter Milk',price:82.45,image:"https://m.media-amazon.com/images/I/71F2m1cn7VL._AC_UF1000,1000_QL80_.jpg"},
        {name:'Paneer', price:75.20,image:"https://m.media-amazon.com/images/I/81hD14MN91L.jpg"},

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
