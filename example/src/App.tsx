import { View, StyleSheet } from 'react-native';
import { AppThemeProvider, Box } from 'ui_kit';

export default function App() {
  return (
    <AppThemeProvider>
      <View style={styles.container}>
        <Box
          width={160}
          height={160}
          backgroundColor="background/solid/bg-brand"
          borderRadius="radii-full"
          borderColor="background/solid/bg-danger"
          borderWidth="border-large"
        />
      </View>
    </AppThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
