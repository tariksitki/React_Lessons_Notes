
// module.css unique classname'ler ürettiği için normal css de yaşanan çakışmalar yaşanmaz
// inspect yaparak module css’in oluşturduğu class isimlendirmesini görebilirsiniz bu sayede nasıl unique classlar oluşturduğunu görebilirsiniz

    // module css de en önemli seylerden biri import yöntemidir:

import styles from "./moduleBtn.module.css";


const ModuleBtn = function ({btnName, btnStyle}) {
  console.log(styles);
    return (
      <div className= {styles.main}>
          {/* <button className= {styles.birinci}>Module Button 1</button>
          <button className={styles.ikinci}>Module Button 2</button> */}
              {/* ayni islem with props */}
          {/* <button className={styles.birinci}>{btnName} </button> */}
          <button className={styles[btnStyle]}>{btnName} </button>
              {/* Cok Önemli: styles in icindeki class isimlerine ulasmak icin normal birinci yazacaksak . koyarak yaziyoruz. ama props kullanarak yazacaksak [] kullaniyoruz */}
      </div>
    ) 
};

export default ModuleBtn;