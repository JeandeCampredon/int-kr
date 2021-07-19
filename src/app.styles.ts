import { StyleSheet } from 'react-native';
import colors from './assets/color';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.TOOLBAR_BACKGROUND,
  },
  container: {
    flex: 1,
  },
  header: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.WHITE,
    fontSize: 25,
    fontWeight: 'bold',
  },
  footer: {
    height: 65,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageInput: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    marginRight: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  messageInputText: {
    fontSize: 17,
  },
  messageSendButton: {
    backgroundColor: colors.BUTTON_BACKGROUND,
    borderRadius: 10,
    padding: 8,
  },
  messageSendButtonText: {
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  conversationContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});
