#!/bin/bash

# 변환할 폴더를 지정합니다.
# 현재 폴더를 사용하려면 . 을 입력하세요.
# 다른 폴더를 사용하려면 /path/to/your/folder 를 입력하세요.
TARGET_DIR="."

# 최대 해상도(픽셀)를 설정합니다.
# 0 으로 설정하면 해상도 조절을 하지 않습니다.
MAX_RESOLUTION=1440

# JPEG 품질을 설정합니다.
# 0(최저)부터 100(최고)까지의 값을 사용합니다.
JPEG_QUALITY=40

TARGET_EXT="JPG"

# 대상 폴더가 존재하는지 확인합니다.
if [ ! -d "$TARGET_DIR" ]; then
    echo "오류: '${TARGET_DIR}' 폴더가 존재하지 않습니다."
    exit 1
fi

# 대상 폴더 내의 모든 .png 파일을 찾아서 변환합니다.
find "$TARGET_DIR" -type f -name "*.${TARGET_EXT}" | while read -r png_file; do
    # 파일 확장자를 제외한 파일 이름을 가져옵니다.
    base_name=$(basename "$png_file" .${TARGET_EXT})
    dir_name=$(dirname "$png_file")

    # 변환될 JPEG 파일 경로를 설정합니다.
    jpeg_file="${dir_name}/${base_name}.JPEG"

    echo "변환 중: ${png_file} -> ${jpeg_file}"

    # sips 명령어를 사용하여 PNG를 JPEG로 변환합니다.
    # --setProperty format jpeg : 출력 형식을 jpeg로 지정
    # --setProperty formatOptions : 품질을 설정
    # --resampleWidth : 최대 너비(해상도)를 설정 (MAX_RESOLUTION이 0보다 클 때만 적용)

    if [ $MAX_RESOLUTION -gt 0 ]; then
        sips -s format jpeg -s formatOptions ${JPEG_QUALITY} --resampleWidth ${MAX_RESOLUTION} "$png_file" --out "$jpeg_file"
    else
        sips -s format jpeg -s formatOptions ${JPEG_QUALITY} "$png_file" --out "$jpeg_file"
    fi

    if [ $? -eq 0 ]; then
        echo "✅ 변환 완료."
    else
        echo "❌ 변환 실패!"
    fi

done

echo "🎉 모든 PNG 파일 변환 작업이 완료되었습니다."
