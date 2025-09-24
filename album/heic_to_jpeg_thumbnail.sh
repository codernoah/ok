#!/bin/bash

# 변환할 폴더 경로를 지정하세요.
folder_path="."

# JPEG 품질을 지정하세요 (0-100).
quality=40

# 최대 해상도 (가장 긴 변)를 지정하세요.
# 예: 1920
max_resolution=480

# HEIC 파일을 찾아서 JPEG로 변환
find "$folder_path" -type f -iname "*.heic" -print0 | while IFS= read -r -d '' heic_file; do
    # 원본 파일의 가로, 세로 해상도를 가져옵니다.
    original_size=$(sips -g pixelWidth -g pixelHeight "$heic_file" | awk '/pixelWidth/ {w=$2} /pixelHeight/ {h=$2} END {print w,h}')
    read -r original_width original_height <<< "$original_size"

    # 해상도를 재계산합니다.
    new_width=$original_width
    new_height=$original_height

    if [ $original_width -gt $original_height ]; then
        if [ $original_width -gt $max_resolution ]; then
            new_height=$((original_height * max_resolution / original_width))
            new_width=$max_resolution
        fi
    else
        if [ $original_height -gt $max_resolution ]; then
            new_width=$((original_width * max_resolution / original_height))
            new_height=$max_resolution
        fi
    fi

    # 파일 이름에서 확장자를 제외한 부분을 추출
    base_name=$(basename "$heic_file" .HEIC)
    base_name="${base_name%.heic}"
    base_name="${base_name%.HEIC}"

    echo "base_name : " ${base_name}

    # 변환된 JPEG 파일의 경로를 설정
    jpeg_file="${folder_path}/${base_name}_thumbnail.JPEG"

    # sips 명령어를 사용하여 변환 (해상도와 품질 동시 적용)
    sips -s format jpeg -s formatOptions "$quality" --resampleWidth "$new_width" "$heic_file" --out "$jpeg_file"

    echo "변환 완료: ${heic_file} -> ${jpeg_file} (${new_width}x${new_height})"
done

echo "모든 HEIC 파일 변환이 완료되었습니다."
