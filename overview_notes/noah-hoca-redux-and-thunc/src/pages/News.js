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

/// useSelector cikmadan önce connect kullaniliyordu.

const News = () => {
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
 
  // useSelector un state e direkt erisimi var. Burada useSelector icine bir callback func aliyor. bu callback func da state i aliyor. state dedigimiz burada rootReducer oluyor yani combine edilmis reducer. state.news;  NewsReducer in rootReducer icindeki kod ismi.

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

  const { newsList } = useSelector((state) => state.news);
  
  return (
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
  );
};

export default News;
