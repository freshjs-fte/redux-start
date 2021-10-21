import axios from "axios"

export const getTasksAsync = async () => {
    const response = await axios.get("http://192.168.1.148:5000/api/tasks")
    return response.data.data
}

export const addTaskAsync = async (data) => {
    const response = await axios.post("http://192.168.1.148:5000/api/tasks", data)
    return response.data.data
}
