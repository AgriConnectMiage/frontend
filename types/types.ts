export interface Farmer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  fieldSize: number;
}

export interface Field {
  id: string;
  xcoord: number;
  ycoord: number;
  farmer: Farmer;
}

type DeviceState = "NOT_ASSIGNED" | "ON" | "OFF";
export interface Sensor {
  id: string;
  state: DeviceState;
  field: Field;
  interval: number;
  currentTemperature: number;
  currentHumidity: number;
}

export interface Actuator {
  id: string;
  state: DeviceState;
  field: Field;
}
