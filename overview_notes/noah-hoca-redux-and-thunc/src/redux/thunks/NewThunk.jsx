

/// dispatch bir hook dur. o nedenle ya bir component icinde yada baska bir hook icinde kullanilir. bu dosya ise bir component degildir sadece bir js dosyasidir. o nedenle baska bir sekilde kullanacagiz. 

const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-04-18&" +
  "sortBy=popularity&" +
  "apiKey=12c34b6d80234673987cc7094eaa6dbf";

        // bu kullanimda getNews bir degisken gibi olur. yani bir func i degiskene atamis gibi. dolayisi ile news.js den import edilirken yanina () koymaya gerek olmaz.
//   const getNews = async (dispatch) => {
//     try {
//       dispatch(setLoading());
//       const { data } = await axios.get(url);
//       dispatch(setNewsList(data.articles));
//     } catch (error) {
//       console.log(error);
//     } finally {
//       dispatch(clearLoading());
//     }
//   };


        /// ikinci Kullanim:
        // Bu kullanimda getNews arrow func i diger bir async func return eder. 
        // bu sekilde kullanmak icin, news.js den bu func i return ederken yaninda () kullanmamiz gerekir.

  const getNews = () => {
      return (
        async (dispatch) => {
            try {
              dispatch(setLoading());
              const { data } = await axios.get(url);
              dispatch(setNewsList(data.articles));
            } catch (error) {
              console.log(error);
            } finally {
              dispatch(clearLoading());
            }
          }
      )
  }