from pydantic.v1 import BaseSettings
from sqlalchemy.orm import declarative_base

class Settings(BaseSettings):
    '''
    Configurações gerais da aplicação
    '''

    API_V1_STR:str = '/api/v1'
    DB_URL: str = 'mysql+asyncmy://root@127.0.0.1:3306/Carros_Velozes_e_Furiosos'

    #Serve para que os models herdem todos os recursos de sqlalchemy
    DBBaseModel = declarative_base()

class Config:
    case_sensitive = False
    env_file = ".env"
    
settings = Settings()


