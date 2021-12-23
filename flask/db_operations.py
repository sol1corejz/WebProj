import psycopg2
from psycopg2 import sql
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from config import DB_CONFIG


def drop_table(table):
    try:
        con = psycopg2.connect(**DB_CONFIG)
        con.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cur = con.cursor()
        cur.execute(sql.SQL("DROP TABLE IF EXISTS {}").format(
            sql.Identifier(table)))
        cur.close()
        con.close()
    except psycopg2.OperationalError as e:
        print(e)
        print('Не удалось удалить таблицу')


def create_db():
    try:
        con = psycopg2.connect(**DB_CONFIG)
    except psycopg2.OperationalError:
        con = psycopg2.connect(user=DB_CONFIG['user'],
                               password=DB_CONFIG['password'])
        con.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cur = con.cursor()
        cur.execute(sql.SQL("CREATE DATABASE {}").format(
            sql.Identifier(DB_CONFIG['database'])))
        cur.close()
    con.close()

