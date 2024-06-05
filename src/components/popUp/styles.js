import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainDiv: {
        position: 'absolute',
        left: 36,
        marginBottom: 2,
        bottom: 1,
        transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        textAlign: 'center',
        width: '30%',
        borderRadius: 10,
        height: 55,
        // Adicionei um placeholder para a animação aqui, ajuste conforme necessário
      },
      error: {
        backgroundColor: '#202020e2',
        color: '#f99914',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#f99914',
      },
      success: {
        backgroundColor: 'rgb(26, 213, 45)',
        color: 'black',
      },
      iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      message: {
        marginLeft: 0.5,
        marginRight: 0.5,
      },
    });

export default styles;