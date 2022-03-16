import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as GameActionCreators from "../store/actions/gameActionCreators";
import * as statisticsActionCreators from "../store/actions/statisticsActionCreators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { ...GameActionCreators, ...statisticsActionCreators },
    dispatch
  );
};
