#!/usr/bin/env python3
"""Script for reading only data from a SQL dump file.

This script takes a SQL dump file, and parses it through to filter insert
statements. It then executes these statements on a SQLite3 database.
Both paths are optional arguments, and if not provided the script will
attempt to read the paths from environment variables.

Examples:
    $ python sqlite3_dumper.py
    $ python sqlite3_dumper.py -db database.db -df dump.sql

Arguments:
    database_path (:obj:`str`, optional): Path to the SQLite3 database file
    dump_path (:obj:`str`, optional): Path to the SQL dump file

Raises:
    FileNotFoundError: If no paths are provided or defined in environment

"""
import os
import argparse
import sqlite3

INSERT_PREFIX = "INSERT INTO"


def import_data(db_file_path: str, dump_file_path: str) -> list[str]:
    """Import only data from a SQL dump file to a SQLite3 database."""
    conn = sqlite3.connect(db_file_path)
    cursor = conn.cursor()

    insert_statements = get_insert_statements(dump_file_path)

    # TODO: Remove these lines after testing
    cursor.close()
    for statement in insert_statements:
        print(statement)

    # TODO: Uncomment these lines after testing
    # cursor.executescript(insert_statements)
    # conn.commit()
    # conn.close()
    return insert_statements


def filter_statement(string: str) -> str:
    """Filter out unwanted characters from a string."""
    starts_with_insert = string.startswith(INSERT_PREFIX)
    # not_prisma_migration = PRISMA_SCHEMA_STRING not in string
    return starts_with_insert


def get_insert_statements(dump_file_path: str) -> list[str]:
    with open(dump_file_path, "r") as f:
        statements = f.readlines()
    insert_statements = [s for s in statements if filter_statement(s)]
    return insert_statements


def handle_paths(path: str | None, env_variable: str) -> str:
    """Handle paths for database and dump file."""

    if path is None:
        env_path = os.getenv(env_variable)
        if env_path is None or not os.path.exists(env_path):
            raise FileNotFoundError(
                f"No path provided or found in environment variable {env_variable}"
            )
        return env_path

    if os.path.exists(path):
        return path
    raise FileNotFoundError(
        f"No path provided or found in environment variable {env_variable}"
    )


def parse_arguments():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description="SQLite3 Data Importer")
    parser.add_argument(
        "-d",
        "--database_path",
        type=str,
        help="Path to the sqlite3 database file",
    )
    parser.add_argument(
        "-f",
        "--dump_file_path",
        type=str,
        help="Path to the SQL dump file",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_arguments()

    database_path = handle_paths(args.database_path, "DATABASE_PATH")
    dump_path = handle_paths(args.dump_file_path, "DUMP_PATH")

    import_data(database_path, dump_path)
