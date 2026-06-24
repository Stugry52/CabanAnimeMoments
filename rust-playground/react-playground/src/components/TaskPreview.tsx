type TakePreviewProps = {
    title: string;
    assignee: string;
    priority: "low" | "medium" | "high";
};

function TakePreview({title, assignee, priority}: TakePreviewProps){
    return{
        <article className: "preview">
            <div className: "title">
                {title.slice(0,1).toUpperCase()}
            </div>

            <div className: "assignee">
                <h2>{assignee}</h2>
                <p>{priority}</p>
            </div>
        </article>
    };
}

export default TakePreview