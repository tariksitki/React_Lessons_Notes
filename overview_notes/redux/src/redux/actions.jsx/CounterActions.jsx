/// counter sayfasinda cagirirken isimizi kolaylastirmak icin, burada actionlarimizi cagiran birer func yapacagiz. counter sayfasinda sadece bu func lari cagiracagiz.
// bu func bir object return edecek ve object in type ini yazdiracagiz.
// ve stringlerde hata yapmamak icin, counterTypes larda belirledigimiz degiskenleri import edecegiz.

// programin ilerleyen kisimlarinda farkli degiskenlere ihtiyac duyarsak, type daha sonra func tanimlariz. en son da reducer da kullaniriz.

import {
  decrease_counter,
  increase_counter,
  reset
} from "../types/CounterTypes";

export const increase = () => {
  return {
    type: increase_counter,
  };
};

export const decrease = () => {
  return {
    type: decrease_counter,
  };
};

export const resetFunc = () => {
  return {
    type: reset,
  }
};
