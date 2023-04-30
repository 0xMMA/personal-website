FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["MM.Website/MM.Website.csproj", "MM.Website/"]
RUN dotnet restore "MM.Website/MM.Website.csproj"
COPY . .
WORKDIR "/src/MM.Website"
RUN dotnet build "MM.Website.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MM.Website.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MM.Website.dll"]
