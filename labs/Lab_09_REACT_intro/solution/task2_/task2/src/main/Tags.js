import React, {useState} from 'react';

const PostTags = ({tag, sort}) => {
    const [select, setSelect] = useState(false);

    const onClickSelect = () => {
        if(!select){
            setSelect(true);
            sort(tag);
        }
        else setSelect(false);
    }

    return (
        <div className="tags" 
            style={{display:'flex', flexDirection:'row'}}>
            <p style={{ color:select?'red':'black' }} onClick={onClickSelect}>{tag}</p>
        </div>
    );
};

export default PostTags;