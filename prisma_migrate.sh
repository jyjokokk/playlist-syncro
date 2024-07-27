#!/bin/bash

# Initialize variables
database_path=""
dump_file_path=""
migration_name=""

function show_help() {
  ./sqlite3_dumper.py -h
}

function make_sql_dump() {
    # ensure file exists and is empty
    echo "" > $2
    sqlite3 $1 .dump > $2
}

execute_logic() {
    local database=$1
    local dump_file=$2

    if [[ -n "$database" && -n "$dump_file" ]]; then
        cp "$database" backup.db
        make_sql_dump "$database" "$dump_file"
        ./sqlite3_dumper.py -d "$database" -f "$dump_file"
        npx prisma migrate dev --name $migration_name
    elif [[ -n "$database" ]]; then
        cp "$database" backup.db
        make_sql_dump "$database" "$DUMP_PATH"
        ./sqlite3_dumper.py -d "$database"
        npx prisma migrate dev --name "$migration_name"
    elif [[ -n "$dump_file" ]]; then
        cp "$DATABASE_PATH" backup.db
        make_sql_dump "$DATABASE_PATH" "$DUMP_PATH"
        ./sqlite3_dumper.py -f "$dump_file"
        npx prisma migrate dev --name "$migration_name"
    else
        cp "$DATABASE_PATH" backup.db
        ./sqlite3_dumper.py
        npx prisma migrate dev --name "$migration_name"
    fi
}

while [[ "$1" =~ ^- ]]; do
    case $1 in
        -d|--database-path)
            if [[ $2 && ! $2 =~ ^- ]]; then
                database_path=$2
                shift
            else
                echo "Error: Option -d|--database-path requires an argument." >&2
                show_help
            fi
            ;;
        -f|--dump-file)
            if [[ $2 && ! $2 =~ ^- ]]; then
                dump_file_path=$2
                shift
            else
                echo "Error: Option -f|--dump-file-path requires an argument." >&2
                show_help
            fi
            ;;
        -h|--help)
            show_help
            exit 0
            ;;
        *)
            echo "Invalid option: $1" >&2
            show_help
            ;;
    esac
    shift
done

# Check if the mandatory argument is provided
if [ $# -lt 1 ]; then
    echo "Migration name is required!" >&2
    show_help
fi

migration_name=$1

echo "MIGRATION NAME $1"

execute_logic "$database_path" "$dump_file_path"
