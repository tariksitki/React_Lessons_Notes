import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearLoading, setLoading } from "../redux/actions/AppActions";
import { setNewsList } from "../redux/actions/NewsActions";
import loadingGif from "../assets/loading.gif"

/// useSelector cikmadan önce connect kullaniliyordu.

const News = () => {
    // bu component da sadece business code larimiz olsun bu tarz logic ler kalabalik etmesin diye url imizi ve getNews func imizi thunk icine tasidik. 
  const url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2022-04-18&" +
    "sortBy=popularity&" +
    "apiKey=12c34b6d80234673987cc7094eaa6dbf";

  // simdi sayfa yüklendikten sonra getNews func cagirmak istiyoruz.
  // async func lari useEffect icinde tanimlamamizi istedi program.
  // ve hemen cagirdik
  // programcilikta, disaridan birsey aliniyorsa bunun gelmeme ihtimali vardir.
  // bu nedenle try catch

  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => state.news);
  const {loading} = useSelector(state => state.app)
      // ikinci kullanim:
  // const newsList = useSelector((state) => state.news.newsList);

  // useSelector un state e direkt erisimi var. Burada useSelector icine bir callback func aliyor. bu callback func da state i aliyor. state dedigimiz burada rootReducer oluyor yani combine edilmis reducer. state.news;  NewsReducer in rootReducer icindeki kod ismi.

    // thunk icine tasimadan önceki halinde, getNews func inini useEffect icinde kullaniyorduk ve bu func dispatch ler ile state leri güncelliyordu. yani biz func icinde dispatch gönderiyorduk. thunk kullaniminda ise buradan komple getNews func i dispatch icine koyup gönderecegiz. 
    // ama kural olarak bizim dispatch icine koydugumuz func yani normal duurmda koydugumuz action lar plain object yani saf js object döndürmek zorunda. ama biz burada komple bir func koyuyoruz. iste bu nedenle react bizi uyariyor. diyor ki bir middleware kullan, ve bu middleware senin yazdigin komple func i alsin plain object e cevirsin ve daha sonra göndersin.
    // bu nedenle async islemler de logic kismini ana component den isole etmek istiyorsak bir middleware kullanmak zorundayiz.
        // neden middleware kullanilir sorusu cevabi
    // redux icinde bir async islem yapacaksak yani redux ile bir api den backend den veri alacaksak ve bu logicigi de ayri bir dosyaya tasiyacaksak bu durumda thunk kullanilir.
    // middleware araya giren bir yazilimdir. arayazilim olarak gecer
    // bu proje icinde bulunan middleware gif inde cok güzel anlatiliyor. UI dan dispatche istekler gönderilir. dispatch reducer a göndermeden önce araya middleware girer ve api den istekleri dispatch degil middleware yapar. api den gelen istegi plane object formatina dönüstürür ve sonra reducer a gönderir.

    // normalde bu sayfada kullandigimizda hersey calisiyordu ve hata almiyorduk. cünkü burada biz dispatch icinde normal actionlarimizi ve payload larimizi yani object return ediyorduk. ama komple func göndermeye baslayinca sikinti oldu.

    // getNews i gönderirken yanina () koymamamizin sebebi bu func in parametresinin olmamasi. eger parametresi olsaydi yanina () koyabilirdik.

    // buradan import ederken dispatch, getNews i sarmalamasi lazim tam tersi degil.

  useEffect(() => {
    const getNews = async () => {
      try {
        dispatch(setLoading());
        const { data } = await axios.get(url);
        dispatch(setNewsList(data.articles));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(clearLoading());
      }
    };
    getNews();
  }, []);

  // && ve || ile yapilan yapilarin genel ismi conditional rendering ama bu islemlere short hand methodu deniyor.

  return (
        // burada daha güzel kullanim box i ayri bir component yapmaktir.
    <>
        {loading && <img style={{width : "200px", height : "200px", margin : "auto"}} src={loadingGif} alt="loadingGif" /> }

        <Box
      xs={{ d: "flex" }}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
    >
      {newsList?.map((item, index) => (
        <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
          <CardMedia
            component="img"
            height="250"
            image={
              item?.urlToImage ??
              "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
            }
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item?.title ?? "Tesla disables gaming while driving feature"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item?.content ??
                "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" href={item?.url} target="_blank">
              Detail
            </Button>
          </CardActions>
        </Card>
      ))}
        </Box>
    </>
  );
};

export default News;
