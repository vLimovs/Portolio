import axios from "axios";
import { create } from "zustand";

type StoreState = {
    data: []
    fetchData: () => void 
}
const Store = create<StoreState>((set) => ({
    data: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://api.github.com/users/vLimovs/repos')
            set({ data: response.data })
        } catch (error) {
            console.error(error);
        }
    }
}))

export default Store