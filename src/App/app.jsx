import CounterA from "../components/counterA";
import store from "../store.js";

import { Provider } from "react-redux";

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <CounterA />
            </Provider>
        </div>
    );
}

export default App;
