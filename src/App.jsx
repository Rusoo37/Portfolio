import IdiomaContextComponent from "./context/IdiomaContext";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <>
            <IdiomaContextComponent>
                <AppRouter />
            </IdiomaContextComponent>
        </>
    );
}

export default App;
