const { useEffect } = require("react");

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - RetoCart`;
    }, [title]);
};
export default UseTitle;
