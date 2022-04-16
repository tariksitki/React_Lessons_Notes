

/// redux da islem sirasi:
// önce reducer veya reducer lar olusturulur.
// 2: bunlar redux klasörü icindeki index js de combine edilir ve daha sonra ayni yerde store olusturulur.
// 3: ana index.js e yada app.js e gidilir ve burada combine eden func import edilir.
// index de ki tüm component lar provider ile sarmallanir. bu provider a store olarak combined store un calistirilmis hali verilir.
// 4: consume islemine gecilir. bunun icin counter da useDispatch ve useSelector cagrilir.




// redux i state management icin, yani state leri tutmak ve manipule etmek icin kullaniyoruz. o nedenle burada initial bir state tanimaldik ve bunu manipule edecegiz.

const initial_state = {
    counter : 0
};

const counterReducer = (state = initial_state, action) => {
    switch (action.type) {
        case "increase_counter" :
            return {...state, counter : state.counter + 1}
        case "decrease_counter" :
            return {...state, counter : state.counter - 1}
        case "reset":
            return {...state, counter : 0};
            // burada initial state de diyebilirdik ama kullanici sadece counter i sifirlamak isterse hata cikmasin diye böyle yazdik
        default:
            return state;
            // burada da kullanici bize bir action gönderdiginde, bu action in type ini göndermezse yada gönderdigi type bizde bulunan type lar arasinda olmadiginda hata almamak icin böyle yaptik (deafult kullanimi)
        
    }
};

// reducer a disaridan ulasmamiz lazim

export default counterReducer;