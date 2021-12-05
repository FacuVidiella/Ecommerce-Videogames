import StyledDetails from "../styles/styled_details/styledDetails";
import { useParams } from "react-router-dom";
import { getDetail } from "../../Redux/actions/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import StyledRequirements from "../styles/styled_requirements/styledRequirements";

export default function Requirements() {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.rootReducer.detailProduct);

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [dispatch, params.id]);

  console.log(details);

  return (
    <>
      <StyledRequirements>
        <div className="content">
          <div className="title">
            <h2>Minium Requirements</h2>
            <hr />
          </div>
          <div className="information">
          {
                details.platforms && details.platforms.map(e => {
                    if(e.platform.name === "PC"){
                        
                        return e.requirements_en !== null? <p dangerouslySetInnerHTML={{__html: e.requirements_en.minimum}}></p> : <p>Requirements are not available</p>

                    }
                })
            }
          </div>
        </div>
        <div className="content">
          <div className="title">
            <h2>Recommend Requirements</h2>
            <hr />
          </div>
          <div className="information">
          {
                details.platforms && details.platforms.map(e => {
                    if(e.platform.name === "PC"){
                        
                        return e.requirements_en !== null? <p dangerouslySetInnerHTML={{__html: e.requirements_en.recommended,}}></p> : <p>Requirements are not available</p>

                    }
                })
            }
          </div>
        </div>
      </StyledRequirements>
    </>
  );
}
