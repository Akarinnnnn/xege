@rem ������һ���������mingw·��������ʹ��code::blocks�Դ���mingw�汾�����룬·�����Դ��ո�������ģ���Ҫʹ��gbk����
set MINGWPATH=C:\Dev-Cpp\MinGW64

set path=%MINGWPATH%\bin;%MINGWPATH%\x86_64-w64-mingw32\bin

mingw32-make.exe -f MakefileWin clean
mingw32-make.exe -f MakefileWin all

if not %ErrorLevel% == 0 (
    rem ����ʧ��
) else (
    rem ������ɣ����ڱ�Ŀ¼����libgraphics.a�ļ�
)

pause

