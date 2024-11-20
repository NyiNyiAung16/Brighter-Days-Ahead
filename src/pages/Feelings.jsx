import FeelingLists from "../components/FeelingLists";
import DefaultLayout from "../layouts/default";
import Spinner from "../components/Spinner";
import useFeeling from "../helpers/useFeeling";
// import { useSearchParams } from "react-router-dom";

export default function Feelings() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [page,setPage] = useState( searchParams.get('page') || 1);
  // const [pages, setPages] = useState([]);

  const feelingContext = useFeeling();


  return (
    <DefaultLayout>
        {feelingContext?.isLoading && <Spinner className="block mx-auto"/>}
        { !feelingContext?.isLoading && <FeelingLists feelings={feelingContext?.feelings} />}
    </DefaultLayout>
  );
}
