
// rxaction

// burada tanimladigimiz func lari, component ler icinde dispatch icinde cagiriyoruz.
// cagirma esnasinda icerisine birsey yazmazsak sadece type return eder. type dedigimiz sey de types dosyasindan cektigimiz seylerdir. eger payload yazarsak da bu payload reducer da yakalanir.
// action lar bir object return etmek zorundadir.

import { set_loading, clear_loading } from "../types/appTypes";

export const setLoading = () => ({
    type : set_loading
});

export const clearLoading = () => ({
    type : clear_loading
    // payload olsaydi onu da yazacaktik
});
