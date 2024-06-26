export enum Status {
  success = 'success',
  error = 'error',
  fail = 'fail'
}

export interface Content {
  status: Status
  data?: Data | string | null
  message?: string
}

export type Data = { [property: string]: Data | unknown }

export type Id = string | number

export enum DriverType {
  http = 'http',
  memory = 'memory',
  supabase = 'supabase',
  json = 'json',
}

export type Driver = {
  type: DriverType
  config: Record<string, string>
}

export type DriverResolver = Record<DriverType, Record<string, (config: Data) => unknown>>
