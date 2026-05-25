import { StyleSheet, View } from 'react-native';
import { AppThemeProvider, Button } from 'ui_kit';

export default function App() {
  return (
    <AppThemeProvider>
      <View style={styles.container}>
        <Button label="Submit" size="sm" state="disabled" />
      </View>
    </AppThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 20,
  },
});
