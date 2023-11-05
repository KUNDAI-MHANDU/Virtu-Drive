import { createDrawerNavigator } from '@react-navigation/drawer';
import IDCard from '../components/id';
import Detail from '../screens/Detail';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={IDCard} />
      <Drawer.Screen name="Article" component={Detail} />
    </Drawer.Navigator>
  );
}

export default MyDrawer