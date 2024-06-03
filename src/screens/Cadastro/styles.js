import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#103778",
        fontWeight: "bold",
        marginTop: -380,
    },
    input: {
        display: "flex",
        flexDirection: "row",
        color: "grey",
        gap: 20,
        marginTop: 20,
        padding: 9,
        width: 280,
        borderRadius: 15,
        backgroundColor: "#E3EEFC",
        alignItems: "center"
    },
    baixoOnda: {
        marginBottom: -400,
    },
    button: {
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#103778",
        width: 150,
        padding: 7,
        borderRadius: 12,
    },
    textButton: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    }
});

export default styles;