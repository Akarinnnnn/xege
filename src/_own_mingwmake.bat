@rem ������һ���������mingw·��������ʹ��code::blocks�Դ���mingw�汾�����룬·�����Դ��ո�������ģ���Ҫʹ��gbk����
set MINGWPATH=D:\mingw4.7.1

set path=%MINGWPATH%\bin;%MINGWPATH%\mingw32\bin

mingw32-make.exe -f MakefileWin clean
mingw32-make.exe -f MakefileWin all

if not %ErrorLevel% == 0 (
    rem ����ʧ��
) else (
    rem ������ɣ����ڱ�Ŀ¼����libgraphics.a�ļ�
)

pause

